module.exports = async function (context, req) {
  const date = "2022-07-09T09:10:11.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

