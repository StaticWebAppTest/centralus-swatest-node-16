module.exports = async function (context, req) {
  const date = "2023-11-25T15:08:03.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

