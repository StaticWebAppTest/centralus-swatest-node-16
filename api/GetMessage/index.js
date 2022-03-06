module.exports = async function (context, req) {
  const date = "2022-03-06T09:08:53.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

