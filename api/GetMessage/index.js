module.exports = async function (context, req) {
  const date = "2024-05-04T06:11:32.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

