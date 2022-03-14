module.exports = async function (context, req) {
  const date = "2022-03-14T08:12:45.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

