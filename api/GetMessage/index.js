module.exports = async function (context, req) {
  const date = "2022-12-04T11:07:18.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

