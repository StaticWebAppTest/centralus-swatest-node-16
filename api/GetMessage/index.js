module.exports = async function (context, req) {
  const date = "2022-11-11T11:10:33.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

