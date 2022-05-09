module.exports = async function (context, req) {
  const date = "2022-05-09T11:10:01.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

