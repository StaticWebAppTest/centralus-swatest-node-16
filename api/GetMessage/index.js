module.exports = async function (context, req) {
  const date = "2023-12-11T05:09:40.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

