module.exports = async function (context, req) {
  const date = "2023-05-28T08:10:03.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

