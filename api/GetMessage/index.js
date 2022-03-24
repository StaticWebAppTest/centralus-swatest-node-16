module.exports = async function (context, req) {
  const date = "2022-03-24T11:08:45.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

