module.exports = async function (context, req) {
  const date = "2022-03-04T09:09:50.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

