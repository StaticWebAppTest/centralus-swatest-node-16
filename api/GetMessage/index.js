module.exports = async function (context, req) {
  const date = "2024-08-24T17:10:23.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

