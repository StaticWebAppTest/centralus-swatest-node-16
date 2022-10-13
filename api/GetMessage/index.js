module.exports = async function (context, req) {
  const date = "2022-10-13T11:12:06.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

