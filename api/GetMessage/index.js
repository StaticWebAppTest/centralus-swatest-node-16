module.exports = async function (context, req) {
  const date = "2022-06-20T11:08:50.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

