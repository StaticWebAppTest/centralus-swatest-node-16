module.exports = async function (context, req) {
  const date = "2023-03-01T17:09:23.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

