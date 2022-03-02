module.exports = async function (context, req) {
  const date = "2022-03-02T04:12:33.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

