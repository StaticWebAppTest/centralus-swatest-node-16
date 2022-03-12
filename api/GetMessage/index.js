module.exports = async function (context, req) {
  const date = "2022-03-12T09:09:47.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

