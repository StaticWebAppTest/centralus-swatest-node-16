module.exports = async function (context, req) {
  const date = "2023-12-28T05:09:03.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

