module.exports = async function (context, req) {
  const date = "2022-07-11T09:21:28.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

