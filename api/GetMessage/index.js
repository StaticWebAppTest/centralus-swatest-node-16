module.exports = async function (context, req) {
  const date = "2023-05-01T09:09:14.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

