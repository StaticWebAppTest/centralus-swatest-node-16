module.exports = async function (context, req) {
  const date = "2024-10-06T06:15:23.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

