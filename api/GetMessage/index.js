module.exports = async function (context, req) {
  const date = "2022-03-20T11:09:33.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

