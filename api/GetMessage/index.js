module.exports = async function (context, req) {
  const date = "2022-10-04T15:17:30.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

