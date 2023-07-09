module.exports = async function (context, req) {
  const date = "2023-07-09T08:11:45.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

