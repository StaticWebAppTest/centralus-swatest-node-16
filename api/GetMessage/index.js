module.exports = async function (context, req) {
  const date = "2024-09-24T17:10:57.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

