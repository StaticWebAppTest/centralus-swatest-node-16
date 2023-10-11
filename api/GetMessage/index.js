module.exports = async function (context, req) {
  const date = "2023-10-11T07:08:33.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

