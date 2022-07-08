module.exports = async function (context, req) {
  const date = "2022-07-08T11:09:27.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

