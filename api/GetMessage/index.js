module.exports = async function (context, req) {
  const date = "2023-04-17T17:08:10.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

