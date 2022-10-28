module.exports = async function (context, req) {
  const date = "2022-10-28T05:23:59.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

