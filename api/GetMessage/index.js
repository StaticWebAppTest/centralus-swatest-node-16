module.exports = async function (context, req) {
  const date = "2022-03-28T18:12:54.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

