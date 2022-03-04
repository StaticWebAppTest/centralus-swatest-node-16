module.exports = async function (context, req) {
  const date = "2022-03-04T08:12:05.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

