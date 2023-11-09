module.exports = async function (context, req) {
  const date = "2023-11-09T09:08:57.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

