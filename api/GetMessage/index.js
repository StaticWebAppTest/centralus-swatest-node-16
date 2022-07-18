module.exports = async function (context, req) {
  const date = "2022-07-18T09:11:03.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

