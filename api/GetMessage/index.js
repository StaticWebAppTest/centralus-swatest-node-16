module.exports = async function (context, req) {
  const date = "2023-07-27T08:11:18.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

