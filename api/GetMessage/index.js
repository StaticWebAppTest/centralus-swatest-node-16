module.exports = async function (context, req) {
  const date = "2023-09-24T03:08:39.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

