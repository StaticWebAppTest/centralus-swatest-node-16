module.exports = async function (context, req) {
  const date = "2023-02-27T07:09:53.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

