module.exports = async function (context, req) {
  const date = "2023-11-24T09:09:09.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

