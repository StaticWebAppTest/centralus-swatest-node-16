module.exports = async function (context, req) {
  const date = "2023-11-14T08:11:33.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

