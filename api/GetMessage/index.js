module.exports = async function (context, req) {
  const date = "2023-12-11T14:09:30.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

