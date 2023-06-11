module.exports = async function (context, req) {
  const date = "2023-06-11T18:10:06.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

