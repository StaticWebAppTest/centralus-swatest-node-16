module.exports = async function (context, req) {
  const date = "2022-03-29T21:09:37.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

