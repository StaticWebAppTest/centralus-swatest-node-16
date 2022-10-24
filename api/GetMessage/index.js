module.exports = async function (context, req) {
  const date = "2022-10-24T09:25:40.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

