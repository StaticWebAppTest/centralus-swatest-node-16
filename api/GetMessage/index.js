module.exports = async function (context, req) {
  const date = "2022-04-29T09:11:19.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

