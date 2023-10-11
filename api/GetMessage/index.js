module.exports = async function (context, req) {
  const date = "2023-10-11T04:10:35.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

