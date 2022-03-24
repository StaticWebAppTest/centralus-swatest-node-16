module.exports = async function (context, req) {
  const date = "2022-03-24T00:45:53.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

