module.exports = async function (context, req) {
  const date = "2023-11-11T07:07:40.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

