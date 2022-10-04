module.exports = async function (context, req) {
  const date = "2022-10-04T11:11:53.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

