module.exports = async function (context, req) {
  const date = "2023-10-29T11:06:23.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

