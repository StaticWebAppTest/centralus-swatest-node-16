module.exports = async function (context, req) {
  const date = "2023-02-11T11:07:33.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

