module.exports = async function (context, req) {
  const date = "2022-02-24T11:08:21.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

