module.exports = async function (context, req) {
  const date = "2023-12-28T11:07:39.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

