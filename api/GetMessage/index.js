module.exports = async function (context, req) {
  const date = "2023-12-31T04:11:03.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

