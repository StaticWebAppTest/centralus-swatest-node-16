module.exports = async function (context, req) {
  const date = "2022-07-13T11:09:11.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

